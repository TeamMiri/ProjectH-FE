import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { name } = router.query;

  return <p>Project Name: {name}</p>;
}
