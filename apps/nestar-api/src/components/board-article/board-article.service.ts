import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BoardArticle } from '../../libs/dto/board-article/board-article';

@Injectable()
export class BoardArticleService {
    constructor(@InjectModel('BoardArticle') private readonly boardArticleModel: Model<BoardArticle>){}
}
