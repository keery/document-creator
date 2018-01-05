import { Injectable }     from '@angular/core';
import { Document }        from './document';
import { DOCUMENTS }        from './mock-document';

@Injectable()
export class DocumentService {
	public getDocuments() : Document[]
	{
		console.log(DOCUMENTS);
		return DOCUMENTS;
	}
}