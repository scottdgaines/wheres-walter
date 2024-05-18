import React, { useState, useEffect } from 'react';
import Browse from '../Browse/Browse';
import { NoticeInterface } from '../../interfaces';
import './Home.css';

type HomeProps = {
    notices: NoticeInterface[];
};

const Home: React.FC<HomeProps> = ({ notices }) => {
  const [lostNotices, setLostNotices] = useState<NoticeInterface[]>([]);
  const [foundNotices, setFoundNotices] = useState<NoticeInterface[]>([]);
  const [selected, setSelected] = useState<string>('Lost');

  const sortNotices = () => {
      const newFoundNotices: NoticeInterface[] = [];
      const newLostNotices: NoticeInterface[] = [];

      notices.forEach(notice => {
        if (notice.noticeType === "Lost") {
          newLostNotices.push(notice)
        } else {
          newFoundNotices.push(notice)
        };
      });

      setLostNotices([...newLostNotices]);
      setFoundNotices([...newFoundNotices]);
    };

  const lostSelected = selected == 'Lost' ? 'selected' : 'unselected';
  const foundSelected = selected == 'Found' ? 'selected' : 'unselected';
    
  useEffect(() => {
    sortNotices();
    setSelected('Lost');
  }, [notices]);

  const browseComponent = selected == 'Lost' ?   <Browse lostNotices={lostNotices} /> : <Browse foundNotices={foundNotices} />;

  return (
    <div>
      <div className='title-container'>
        <p className={`title ${lostSelected}`} onClick={() => setSelected('Lost')}>Lost</p>
        <p className={`title ${foundSelected}`} onClick={() => setSelected('Found')}>Found</p>
      </div>
      <div className='browse-container'>
      {browseComponent}
      </div>

    </div>
  )
};

export default Home
