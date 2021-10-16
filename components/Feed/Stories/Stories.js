import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories() {
  const { data: session } = useSession();

  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => {
      return {
        ...faker.helpers.contextualCard(),
        id: i,
      };
    });
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin  scrollbar-thumb-black">
      {session && (
        <Story img={session?.user?.image} username={session?.user?.username} />
      )}

      {suggestions.map((profile) => (
        <Story
          img={profile.avatar}
          key={profile.id}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
