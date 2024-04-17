import { Body, Controller, Get, Param, Post, Render, Res, Session } from "@nestjs/common";
import { AddPostDto } from "./dtos/addPostDto";
import { PostService } from "./post.service";
import { User } from "../user/user.entity";
import {Response} from "express";

@Controller('post')
export class PostController {

  constructor(private readonly postService: PostService) {}

  @Get("/add")
  @Render("post/addPost")
  getAddPost(){}

  @Post("/add")
  async postAddPost(@Body() body : AddPostDto, @Session() session : Record<string, any>){
    const currentUser : User = session.user
    return await this.postService.postAddPost(body, currentUser)
  }

  @Get("/detail/:id")
  @Render("post/detail")
  async getDetailsPost(@Param("id") id:string, @Res() res: Response ){
     try{
       const post = await this.postService.getDetailPost(id);
       // console.log(post) //Renvoi la valeur post direct
       // console.log("------")
       // console.log({post}) //Renvoi l'objet post encapsulé de ces données et comme nom Post
       return {post}
     }catch(e) {
        res.status(404).render("errors/404", {message:e.message});
     }
  }

}
