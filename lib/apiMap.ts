const APISource = {
  DEV_API: 'http://localhost:5000/api',
}

interface APIMap {
  $announce: (id: string) => string
  $announceList: () => string
}

const development: APIMap = {
  $announce: (id: string) => `${APISource.DEV_API}/announce/${id}`,
  $announceList: () => `${APISource.DEV_API}/announce/list`,
}

const production: APIMap = {
  $announce: (id: string) => `${APISource.DEV_API}/announce/${id}`,
  $announceList: () => `${APISource.DEV_API}/announce/list`,
}

export const ApiMap =
  process.env.NODE_ENV !== 'production' ? development : production
