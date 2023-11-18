import { ChangeEvent, FC, useState } from 'react';

import { SmallAvatarImg } from '@/components/LeftMenu/styled';
import { allImages } from '@/constants/allImages';
import { createNewTweetHelper } from '@/helpers/tweetHelpers';
import { useAction } from '@/hooks/useAction';

import { config } from './config';
import { Form, Image, TweetButton, TweetInput, Wrapper } from './styled';
import { IProps } from './types';

const { addImg } = allImages;

const { tweetButtonText, inputPlaceholder } = config;

const CreateTweet: FC<IProps> = ({ user }) => {
  const { addTweet } = useAction();
  const [tweetText, setTweetText] = useState<string>('');

  const { id, photo, name, email } = user;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setTweetText(target.value);
  };

  const handleSubmit = async () => {
    if (tweetText) {
      const newTweet = await createNewTweetHelper({
        tweetText,
        userId: id,
        userPhoto: photo,
        userName: name,
        userEmail: email
      });
      addTweet(newTweet);
      setTweetText('');
    }
  };

  return (
    <Wrapper>
      <SmallAvatarImg src={photo} alt="user avatar" />
      <Form onSubmit={handleSubmit}>
        <TweetInput placeholder={inputPlaceholder} value={tweetText} onChange={handleInputChange} />
        <Image src={addImg} alt="add image" />
        <TweetButton type="submit">{tweetButtonText}</TweetButton>
      </Form>
    </Wrapper>
  );
};

export default CreateTweet;
