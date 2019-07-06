import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class SearchService {

    private static readonly apiUrl =
        "https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=";

    constructor(private http: Http) { }

    /**
     * Send a request to the stackoverflow api to get questions containing a certain keyword.
     * @param keyword Receive the questions containing this keyword.
     */
    search(keyword: string): Observable<ISearchResultItem[]> {
        return this.http.get(SearchService.apiUrl + keyword).map((res:  Response) => res.json().items)
            .catch((err: Response) => Observable.of(err.json()));
    }

}

export interface ISearchResultItem  {
    answer_count: number;
    closed_date: number;
    closed_reason: string;
    creation_date: number;
    is_answered: boolean;
    last_activity_date: number;
    link: string;
    score: number;
    tags: Array<string>;
    title: string;
    view_count: number;
    owner: Owner;
}

export interface Owner  {
    display_name: string;
    reputation: string;
    profile_image: string;
}
