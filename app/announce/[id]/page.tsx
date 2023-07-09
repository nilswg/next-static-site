import { getAnnounce } from '@/lib/services/getAnnounce';
import { getAnnounceList } from '@/lib/services/getAnnounceList';
import { Announce } from '@/types';

export async function generateStaticParams() {
  const data = await getAnnounceList();
  const params = data.announces.map((announce: Announce) => ({
    id: announce.id,
  }));
  console.log({ params });
  return params;
}

export default async function AnnouncePage({ params }: { params: { id: string } }) {
  const { announce } = await getAnnounce(params.id);
  return (
    <div>
      <h1>{announce.title}</h1>
      <p>{announce.content}</p>
    </div>
  );
}
