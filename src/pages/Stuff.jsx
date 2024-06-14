import React, { useEffect, useState } from "react";
import Case from "../components/Case";
import Table from "../components/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Stuff() {
  const [stuffs, setStuffs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getStuffs();
  }, []);

  function getStuffs() {
    axios.get(`${import.meta.env.VITE_API_URL}/stuffs`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
      }
    })
    .then(res => {
      setStuffs(res.data.data);
    })
    .catch(err => {
      console.log(err);
      if (err.response.status === 401) {
        navigate('/login?message=' + encodeURIComponent('Anda belum login!'));
      }
    });
  }

  const headers = [
    "#",
    "Name",
    "Category",
    "Total Available",
    "Total Defec"
  ];

  const endpointModal = {
    "data_detail":`${import.meta.env.VITE_API_URL}/stuffs/{id}`,
    "delete": `${import.meta.env.VITE_API_URL}/stuffs/delete/{id}`,
    "update": `${import.meta.env.VITE_API_URL}/stuffs/update/{id}`,
    "store": `${import.meta.env.VITE_API_URL}/stuffs/store`,
  };

  const columnIdentitasDelete = 'name';

  const inputData = {
    "name": {
      "tag": "input",
      "type": "text",
      "option": null
    },
    "category": {
      "tag": "select",
      "type": "select",
      "option": ["HTL", "KLN", "Teknisi/Sarpras"] // Example options, adjust as necessary
    },
  };

  const title = 'stuff';

  const buttons = [
    "create",
    "trash",
    "edit",
    "delete"
  ]

  const tdColumn = {
    "name": null,
    "category": null,
    "stuff_stock":"total_available",
    "stuff_stock*": "total_defec"
  }

  return (
    <Case>
      <Table 
        headers={headers} 
        data={stuffs} 
        endpoint={endpointModal} 
        inputData={inputData} 
        titleModal={title}
        columnIdentitasDelete={columnIdentitasDelete}
        opsiButton={buttons}
        columnForTd={tdColumn}
      />
    </Case>
  );
}
