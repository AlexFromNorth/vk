import { IPost, timeCreated } from "../../../types"

export const initialPosts:IPost[] = [
    {
        author:{
          id: 0,
          avatar: 'https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg',
          name: 'Alexander Biryukov',
        },
        content: 'Национальный парк Таб Каек Ханг Нак',
        createdAt: timeCreated(new Date),
        images: [
          'https://3.bp.blogspot.com/-crNxNfNb36o/WOS3NYlg4-I/AAAAAAAAGrk/al1Z1kPUmhk6lunKPPLu5veZeHOlt7crACLcB/s1600/IMG_7933.jpg',
          'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F06%2Fnational-geographic-2019-travel-photo-contest-winners-10.jpg?q=90&w=1400&cbr=1&fit=max',
          'https://en.bcdn.biz/Images/2016/10/6/87d92a7b-e5e3-4ce5-a9c1-9ae45cd0944c.jpg',
          'https://image1.thematicnews.com/uploads/topics/preview/00/09/98/00/9710ef6630.jpg', 
          'https://content.api.news/v3/images/bin/e65aff94d53a3a9280144fba992b05b3', 
        ]
  
      }
]