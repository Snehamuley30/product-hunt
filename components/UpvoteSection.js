// components/UpvoteSection.js
import { useState } from 'react';
import styles from './UpvoteSection.module.css';

const UpvoteSection = () => {
  const [upvoted, setUpvoted] = useState(false);

  const handleUpvote = () => {
    setUpvoted(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.voteContainer}>
        <button
          className={`${styles.voteButton} ${upvoted ? styles.upvoted : ''}`}
          onClick={handleUpvote}
        >
          {upvoted ? 'Upvoted' : 'Upvote'}
        </button>
      </div>
    </div>
  );
};

export default UpvoteSection;
