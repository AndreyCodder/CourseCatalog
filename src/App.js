import { useState, React, useMemo } from "react";
import TilesList from "./components/tiles/TilesList";
import "./styles/Root.css";
import RInput from "./components/UI/RInput";
import RTextCheckBox from "./components/UI/RTextCheckBox";

function App() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Course 1",
      img_url: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
      tags: ["#tag1", "#tag2"],
      likes: getRandomInt(10),
      dislikes: getRandomInt(10),
    },
    {
      id: 2,
      name: "Course 2",
      img_url:
        "https://lh3.googleusercontent.com/ndHZZOdVSy1Gmcg-IZ_zJFjCviAH6Agqjt8NQh0lOVsWTvUINW8x2l1JJnLbhQ3Hm4SK_ctRwywbq4yNabaEss8X0ms8xoDfroenPVPyu1zS6kZCFvI=w600-l80-sg-rp",
      tags: ["#tag1", "#tag3"],
      likes: getRandomInt(10),
      dislikes: getRandomInt(10),
    },
    {
      id: 3,
      name: "Course 3",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/langru-1500px-Google_Photos_icon_%282020%29.svg.png",
      tags: ["#tag2", "#tag3"],
      likes: getRandomInt(10),
      dislikes: getRandomInt(10),
    },
    {
      id: 4,
      name: "Course 4",
      img_url: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
      tags: ["#tag3"],
      likes: getRandomInt(10),
      dislikes: getRandomInt(10),
    },
    {
      id: 5,
      name: "Course 5",
      img_url:
        "https://lh3.googleusercontent.com/ndHZZOdVSy1Gmcg-IZ_zJFjCviAH6Agqjt8NQh0lOVsWTvUINW8x2l1JJnLbhQ3Hm4SK_ctRwywbq4yNabaEss8X0ms8xoDfroenPVPyu1zS6kZCFvI=w600-l80-sg-rp",
      tags: ["#tag2"],
      likes: getRandomInt(10),
      dislikes: getRandomInt(10),
    },
    {
      id: 6,
      name: "Course 6",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/langru-1500px-Google_Photos_icon_%282020%29.svg.png",
      tags: ["#tag1", "#tag2"],
      likes: getRandomInt(10),
      dislikes: getRandomInt(10),
    },
    {
      id: 7,
      name: "Course 7",
      img_url: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
      tags: ["#tag1", "#tag2", "#tag3"],
      likes: getRandomInt(10),
      dislikes: getRandomInt(10),
    },
    {
      id: 8,
      name: "Course 8",
      img_url:
        "https://lh3.googleusercontent.com/ndHZZOdVSy1Gmcg-IZ_zJFjCviAH6Agqjt8NQh0lOVsWTvUINW8x2l1JJnLbhQ3Hm4SK_ctRwywbq4yNabaEss8X0ms8xoDfroenPVPyu1zS6kZCFvI=w600-l80-sg-rp",
      tags: ["#tag1", "#tag2", "#tag3"],
      likes: getRandomInt(10),
      dislikes: getRandomInt(10),
    },
    {
      id: 9,
      name: "Course 9",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/langru-1500px-Google_Photos_icon_%282020%29.svg.png",
      tags: ["#tag1", "#tag2", "#tag3"],
      likes: getRandomInt(10),
      dislikes: getRandomInt(10),
    },
    {
      id: 10,
      name: "Course 10",
      img_url:
        "https://www.vectorico.com/wp-content/uploads/2018/02/Facebook-Like-Button.png",
      tags: ["#tag1", "#tag2", "#tag3"],
      likes: getRandomInt(10),
      dislikes: getRandomInt(10),
    },
    {
      id: 11,
      name: "Course 11 Course 11 Course 11 Course 11",
      img_url:
        "https://www.pinkbus.ru/im/600x600/545636/0/1408877/1_den._domik_kontury_Montazhnaya_oblast_1.jpg",
      tags: ["#tag1", "#tag2", "#tag3"],
      likes: getRandomInt(10),
      dislikes: getRandomInt(10),
    },
    {
      id: 12,
      name: "Course 12",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7npKNifx5hRfGGIKUdYsEww6j7MiZclzWA&s",
      tags: ["#tag1", "#tag2", "#tag3"],
      likes: getRandomInt(10),
      dislikes: getRandomInt(10),
    },
    {
      id: 13,
      name: "Course 13",
      img_url:
        "https://zvetnoe.ru/upload/images/blog/135_Peizazhnaya_zhivopis_istorya_osnovnye_vidy_i_stili/2.jpg",
      tags: ["#tag1", "#tag2", "#tag3"],
      likes: getRandomInt(10),
      dislikes: getRandomInt(10),
    },
    {
      id: 14,
      name: "Course 14",
      img_url:
        "https://lh3.googleusercontent.com/ndHZZOdVSy1Gmcg-IZ_zJFjCviAH6Agqjt8NQh0lOVsWTvUINW8x2l1JJnLbhQ3Hm4SK_ctRwywbq4yNabaEss8X0ms8xoDfroenPVPyu1zS6kZCFvI=w600-l80-sg-rp",
      tags: ["#tag1", "#tag2", "#tag3"],
      likes: getRandomInt(10),
      dislikes: getRandomInt(10),
    },
    {
      id: 15,
      name: "Course 15",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/langru-1500px-Google_Photos_icon_%282020%29.svg.png",
      tags: ["#tag1", "#tag2", "#tag3"],
      likes: getRandomInt(10),
      dislikes: getRandomInt(10),
    },
  ]);
  const [tags, setTags] = useState([
    { checked: false, title: "#tag1", id: 1 },
    { checked: false, title: "#tag2", id: 2 },
    { checked: false, title: "#tag3", id: 3 },
  ]);
  const [searchString, setSearchString] = useState("");

  const filteredSortedCourses = useMemo(() => {
    var resultArray = courses;
    resultArray = resultArray.filter(
      (item) =>
        item.name.toUpperCase().includes(searchString.toUpperCase()) ||
        searchString === ""
    );

    var tagsArray = tags.filter((elem) => elem.checked);

    resultArray = resultArray.filter(function (elem) {
      return (
        tagsArray.length === 0 ||
        elem.tags.some((elemTag) => {
          return tagsArray.some((tag) => {
            return elemTag === tag.title;
          });
        })
      );
    });
    return resultArray;
  }, [searchString, courses, tags]);

  function searchFilter(event) {
    setSearchString(event.target.value);
  }
  function tagsChange(id) {
    var newArr = [];
    tags.forEach((elem, index) => {
      if (elem.id === id) {
        elem.checked = !elem.checked;
        newArr.push(elem);
      } else {
        newArr.push(elem);
      }
    });
    setTags(newArr);
  }
  return (
    <div>
      <RInput changeCallback={searchFilter} searchString={searchString} />
      <div className="chips_block">
        {tags.map((elem) => {
          return (
            <RTextCheckBox
              checked={elem.checked}
              title={elem.title}
              clickCallback={tagsChange}
              id={elem.id}
              key={elem.id}
            />
          );
        })}
      </div>
      <TilesList tilesArray={filteredSortedCourses} />
    </div>
  );
}

export default App;
