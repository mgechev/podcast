import { computed, Injectable } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';

export interface Episode {
  title: string;
  description: string;
  slug: string;
  published: Date;
  number: number;
  audio: string;
}

const dateRe = /(\d\d?-\d\d?-\d\d\d\d)/;

@Injectable()
export class Episodes {
  private contentFiles = injectContentFiles<Episode>();
  episodes = computed(() => {
    const routeList = this.contentFiles
      .filter(r => dateRe.test(r.slug))
      .sort((a, b) => {
        const adate = dateRe.exec(a.slug)?.[0] as string;
        const bdate = dateRe.exec(b.slug)?.[0] as string;
        return new Date(bdate).getTime() - new Date(adate).getTime();
      });
    return routeList
      .map((e, idx) => {
        const adate = dateRe.exec(e.slug)?.[0] as string;

        return {
          ...e,
          published: new Date(adate),
          number: routeList.length - idx
        }
      });
  });
}
