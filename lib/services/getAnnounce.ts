import { ApiMap } from '@/lib/apiMap';
import { Announce } from '@/types';

type Resp_getAnnounce = {
  announce: Announce
}

export const getAnnounce = async (id: string) => {
  const res: Resp_getAnnounce = await fetch(ApiMap.$announce(id)).then((res) => res.json());
  return res;
};
