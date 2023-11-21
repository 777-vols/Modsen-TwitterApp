import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { ChangeEvent, FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

import { SmallAvatarImg } from '@/components/LeftMenu/styled';
import { allImages } from '@/constants/allImages';
import { createNewTweetHelper } from '@/helpers/tweetHelpers';
import { useAction } from '@/hooks/useAction';
import { IUser } from '@/pages/Profile/types';
import { userSelector } from '@/store/slices/userSlice/selectors';

import { config } from './config';
import {
  AddImageInput,
  AddImageLabel,
  ButtonsWrapper,
  Form,
  Image,
  NameImage,
  Textarea,
  TweetButton,
  Wrapper
} from './styled';

const { addImg } = allImages;

const { tweetButtonText, inputPlaceholder } = config;

const CreateTweet: FC = () => {
  const addImageInputId = v4();
  const currentUser = useSelector(userSelector) as IUser;
  const { addTweet } = useAction();

  const [tweetText, setTweetText] = useState<string>('');
  const [image, setImage] = useState<File>();

  const { id, photo, name, email } = currentUser;

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;
    setTweetText(target.value);
  };

  const handleUploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
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
        <Textarea placeholder={inputPlaceholder} value={tweetText} onChange={handleInputChange} />
        <ButtonsWrapper>
          <AddImageLabel htmlFor={addImageInputId}>
            <Image src={addImg} alt="upload image" />
            <AddImageInput
              type="file"
              id={addImageInputId}
              accept="image/*"
              hidden
              onChange={handleUploadImage}
            />
            {image && <NameImage>{image.name}</NameImage>}
          </AddImageLabel>
          <TweetButton type="submit">{tweetButtonText}</TweetButton>
        </ButtonsWrapper>
      </Form>
    </Wrapper>
  );
};

export default memo(CreateTweet);
