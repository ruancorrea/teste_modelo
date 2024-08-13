import React from 'react';

interface InfoCardProps {
  title: string;
  describe: string;
  color: string;
  textColor:string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, describe, color, textColor }) => {
  return (
    <div className={`${color} justify-center font-mono ${textColor} py-40 px-20 text-center`}>
      <h2 className="text-2xl sm:text-sm font-bold mb-3">{title}</h2>
      <p className='sm:text-sm'>{describe}</p>
    </div>
  );
};

export default InfoCard;