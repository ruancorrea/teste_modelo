import React from 'react';

interface InfoCardProps {
  title: string;
  describe: string[];
  color?: string;
  textColor?:string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, describe, color, textColor }) => {
  return (
    <div className={`${color} justify-center font-mono ${textColor} py-20 px-10 lg:py-40 lg:px-20 text-center`} style={{"backgroundColor": "#e42785", "color": "#f8ffff"}}>
      <h2 className="text-4xl sm:text-md font-bold mb-3">{title}</h2>
      {
        describe.map((item, index) => (
          <p key={index} className='text-lg lg:text-2xl text-center mb-4'>{item}</p>
        ))}
    </div>
  );
};

export default InfoCard;