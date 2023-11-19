import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { ChangeEvent, FC, useState } from 'react';

import { SmallAvatarImg } from '@/components/LeftMenu/styled';
import { allImages } from '@/constants/allImages';
import { createNewTweetHelper } from '@/helpers/tweetHelpers';
import { useAction } from '@/hooks/useAction';

import { config } from './config';
import {
  AddImageInput,
  AddImageLabel,
  Form,
  Image,
  NameImage,
  TweetButton,
  TweetInput,
  Wrapper
} from './styled';
import { IProps } from './types';

const { addImg } = allImages;

const { tweetButtonText, inputPlaceholder } = config;

const CreateTweet: FC<IProps> = ({ user }) => {
  const { addTweet } = useAction();
  const [tweetText, setTweetText] = useState<string>('');
  const [image, setImage] = useState<File>();

  const { id, photo, name, email } = user;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setTweetText(target.value);
  };

  const uploadImageHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      const storage = getStorage();
      const storageRef = ref(storage, 'some-child');
      setImage(files[0]);
      await uploadBytes(storageRef, files[0]);
    }
  };

  const handleSubmit = async () => {
    if (tweetText) {
      const newTweet = await createNewTweetHelper({
        tweetText,
        userId: id,
        userPhoto: photo,
        userName: name,
        userEmail: email,
        image
      });
      addTweet(newTweet);
      setTweetText('');
      setImage(undefined);
    }
  };

  return (
    <Wrapper>
      <SmallAvatarImg src={photo} alt="user avatar" />
      <Form onSubmit={handleSubmit}>
        <TweetInput placeholder={inputPlaceholder} value={tweetText} onChange={handleInputChange} />
        <AddImageLabel htmlFor="uploadFile">
          <Image src={addImg} alt="upload image" />
          <AddImageInput
            type="file"
            id="uploadFile"
            accept="image/*"
            hidden
            onChange={uploadImageHandler}
          />
          {image && <NameImage>{image.name}</NameImage>}
        </AddImageLabel>
        <TweetButton type="submit">{tweetButtonText}</TweetButton>
      </Form>
    </Wrapper>
  );
};

export default CreateTweet;
