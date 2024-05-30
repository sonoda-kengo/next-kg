import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import { IArticle } from 'type/types';

export const fetchArticles = async (): Promise<IArticle[]> => {
  const { data } = await axios.get('https://note.com/magn_kengo/rss');
  const parser = new XMLParser();
  const parsedData = parser.parse(data);

  const items = parsedData.rss.channel.item;

  const articles: IArticle[] = items.map((item: any) => ({
    title: item.title || '',
    thumbnail: item['media:thumbnail'] || null,
    description: item.description || '',
    link: item.link || '',
  }));

  return articles;
};
