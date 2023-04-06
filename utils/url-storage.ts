let urls = new Map<string, any>();
let ids = new Array<string>();

export default urls;

export function addUrl(id: string, url: string) {
  let urlBody = {
    url: String(url),
    time: new Date().getTime(),
  };
  ids.push(id);
  urls.set(id, urlBody);
}

export function getUrl(id: string): string | undefined {
  return urls.get(id)["url"];
}

setInterval(() => {
  for(let i=0; i<ids.length; i++) {
    let entryTime = urls.get(ids[i])['time']
    if( (new Date().getTime() - entryTime) >= 180000) {
      urls.delete(ids[i]);
      ids = ids.filter(item => ids[i] !== item)
    }
  }
}, 10000);
