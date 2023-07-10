import { announces } from "../mock/announces.mock";

export const getAnnounceList = () => {
  return { announces };
};

export const getAnnounce = (id: string) => {
  const announce = announces.find((x) => x.id === id) ?? {
    id: 'notfound',
    title: '',
    content: '',
  };

  return { announce };
};
