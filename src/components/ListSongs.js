import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong,setIdSong] = useState(0)
  const handlePlaySong = (idSong) => {
    setIdSong(idSong)
    handleSetSong(idSong)
  }
  useEffect(()=>{
    setIdSong(song.id)
  },[song])
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full ">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[20%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              className={`text-center bg-slate-800 h-12 text-gray-500 hover:bg-gray-600 ${idSong === song.id && 'bg-gray-600 text-green-500'}`}
              key={index}
              onClick={() => handlePlaySong(song.id)}
            >
              <td>{index + 1}</td>
              <td className="text-left">{song.name}</td>
              <td>{song.author}</td>
              <td>
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
