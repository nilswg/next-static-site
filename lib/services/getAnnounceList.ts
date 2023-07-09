import { ApiMap } from '@/lib/apiMap';

export const getAnnounceList = async () => {
  const data = await fetch(ApiMap.$announceList()).then((res) => res.json())
  return data
}
