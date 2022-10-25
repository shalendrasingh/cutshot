import React from "react";
import TeamCard from "../components/TeamCard";
import Welcome from "../components/Welcome";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";

const dummyText = {
  title: "How are you planning to use Eden?",
  subTitle: "We'll streamline your setup experience accordingly.",
};

const optionType = [
  {
    id: 1,
    icon: <PersonIcon />,
    title: "For myself",
    desc: "Write better. Think more clearly. Stay organized.",
    border: true,
  },
  {
    id: 2,
    icon: <GroupsIcon />,
    title: "With my team",
    desc: "Wikis, docs, tasks & projects, all in one place.",
    border: false,
  },
];

const ThirdStep = () => {
  return (
    <>
      <Welcome data={dummyText} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {optionType.map((item) => {
          return <TeamCard data={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default ThirdStep;
