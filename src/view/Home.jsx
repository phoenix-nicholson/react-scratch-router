import { fetchGhibli } from '../services/api';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetchGhibli();
  });
  return <h1>hello world</h1>;
}
