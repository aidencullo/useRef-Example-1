import Carousel from "./Carousel";

export default function CatFriends() {
  return <Carousel list={catList} />;
}

const catList = [];
for (let i = 10; i < 20; i++) {
  catList.push({
    id: i,
    imageUrl: "https://picsum.photos/200/300?random=" + i
  });
}
