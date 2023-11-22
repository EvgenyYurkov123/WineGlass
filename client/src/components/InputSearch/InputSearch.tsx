import { Input } from "@chakra-ui/react";
import { ContextAll } from "../../context/context";
import styles from "./InputSearch.module.css";
import { useContext, useEffect } from 'react';

export default function InputSearch  () {
  const { query, setQuery } = useContext(ContextAll);


  return (
    <Input className={styles.Search}
    style={{width: '600px'}}
      placeholder="Basic usage"
      onChange={e => setQuery(e.target.value)}
    />
  );
};