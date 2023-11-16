import { ChangeEvent, FC, useState } from 'react';

import { SmallAvatarImg } from '@/components/LeftMenu/styled';
import { allImages } from '@/constants/allImages';
import { createNewTweetHelper } from '@/helpers/tweetHelpers';

import { Form, PanelImage, TweetButton, TweetInput, Wrapper } from './styled';
import { IProps } from './types';

const { addImg } = allImages;

const CreateTweet: FC<IProps> = ({ user }) => {
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
      setTweetText('');
      console.log(newTweet);
    }
  };

  return (
    <Wrapper>
      <SmallAvatarImg src={photo} alt="userAvatar" />
      <Form onSubmit={handleSubmit}>
        <TweetInput placeholder="What's Happening" value={tweetText} onChange={handleInputChange} />
        <PanelImage src={addImg} alt="addImg" />
        <TweetButton type="submit">Tweet</TweetButton>
      </Form>
    </Wrapper>
  );
};

export default CreateTweet;
