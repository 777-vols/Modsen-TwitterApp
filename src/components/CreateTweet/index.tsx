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

const {
  tweetButtonText,
  inputPlaceholder,
  lengthError,
  loadImageError,
  addTweetError,
  successMessage
} = config;

const CreateTweet: FC = () => {
  const addImageInputId = v4();
  const currentUser = useSelector(userSelector) as IUser;
  const { addTweet, setErrorNotification, setSuccessNotification } = useAction();

  const [inputValue, setInputValue] = useState<string>('');
  const [image, setImage] = useState<File>();

  const { id, photo, name, email } = currentUser;

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;

    if (target.value.length < 500) {
      setInputValue(target.value);
    } else {
      setErrorNotification({
        message: lengthError
      });
    }
  };

  const handleUploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    try {
      if (files) {
        const storage = getStorage();
        const storageRef = ref(storage, 'some-child');
        setImage(files[0]);
        await uploadBytes(storageRef, files[0]);
      }
    } catch (error) {
      setErrorNotification({
        message: loadImageError
      });
    }
  };

  const handleSubmit = async () => {
    try {
      if (inputValue) {
        const newTweet = await createNewTweetHelper({
          tweetText: inputValue,
          userId: id,
          userPhoto: photo,
          userName: name,
          userEmail: email,
          image
        });
        addTweet(newTweet);
        setInputValue('');
        setImage(undefined);
        setSuccessNotification({
          message: successMessage
        });
      }
    } catch (error) {
      setErrorNotification({
        message: addTweetError
      });
    }
  };

  return (
    <Wrapper>
      <SmallAvatarImg src={photo} alt="create tweet avatar" />
      <Form onSubmit={handleSubmit}>
        <Textarea placeholder={inputPlaceholder} value={inputValue} onChange={handleInputChange} />
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
