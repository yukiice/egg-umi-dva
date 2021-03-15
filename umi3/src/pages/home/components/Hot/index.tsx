import { memo, useState, useEffect } from 'react';

export default memo(function Header() {
  const [house, setHouse] = useState([
    {
      id: 1,
      img:
        'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
      title: '东城民宿',
      info: '东城区交通方便',
      price: '100',
    },
    {
      id: 2,
      img:
        'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
      title: '西城民宿',
      info: '西城区山水怡情',
      price: '120',
    },
    {
      id: 3,
      img:
        'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
      title: '新区民宿',
      info: '新区民宿位置优越',
      price: '200',
    },
    {
      id: 4,
      img:
        'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
      title: '老城民宿',
      info: '老城区风景秀美',
      price: '220',
    },
  ]);
  return (
    <>
      <div className="card4_f">
        {house.map((item) => {
          return (
            <div className="card4_c border mt-2" key={item.id}>
              <div className="w90 mx-auto mt-1">
                <img
                  src={item.img}
                  className="img-fluid mx-auto rounded"
                  alt="..."
                ></img>
              </div>
              <div className="mx-auto w90 mt-1">{item.title}</div>
              <div className="mx-auto w90 mt-1 text-muted fs-7 ">
                {item.info}
              </div>
              <div className="d-flex w90 mx-auto mt-1 text-danger mb-1">
                <div className="w-auto">$</div>
                <div className="pl-1 w-auto">{item.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
});
