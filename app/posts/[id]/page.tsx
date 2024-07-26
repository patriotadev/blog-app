'use client'

import { getPostById, getPostCommentsById } from "@/actions/post";
import Button from "@/components/Button";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/Card";
import Spinner from "@/components/Spinner";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PostDetail ({ params }: { params: {id: string} }) {
    const router = useRouter();
    const [post, setPost] = useState<any>();
    const [comments, setComments] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [limit, setLimit] = useState<number>(3);

    const fetchPostDetail = async (id: string) => {
        setIsLoading(true);
        return getPostById(id).then(res => {
            console.log(res);
            setPost(res);
            setIsLoading(false);
        });
    }

    const fetchPostComments = async (id: string) => {
        return getPostCommentsById(id).then(res => {
            console.log(res);
            setComments(res.comments);
        });
    }

    useEffect(() => {
        fetchPostComments(params.id)
        fetchPostDetail(params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-24 lg:px-36 xl:px-48 2xl:px-56 px-10">
            {isLoading ? <Spinner /> : <div>
                <Link href='/'>
                    <Button color="bg-secondary" className="mb-4 text-sm font-semibold">Back</Button>
                </Link>
                <Card>
                    <CardHeader>
                        <h1>
                            {post ? post.title : ''}
                        </h1>
                    </CardHeader>
                    <CardBody>
                        <div>
                            {post && post.body}
                            <div className="mt-4 flex gap-2">
                                {post && post.tags.map((tag: string, index: number) => <p key={index}>{`#${tag}`}</p>)}
                            </div>
                            <div className="flex gap-4 mt-4">
                                <p className="text-sm">{post && post.views}{" "}Views</p>
                                <p className="text-sm">{post && post.reactions.likes}{" "}Likes</p>
                                <p className="text-sm">{post && post.reactions.dislikes}{" "}Dislikes</p>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="w-full">
                            <p className="mb-2 ml-2 flex justify-start text-sm font-semibold">Comments</p>
                            {comments && comments.slice(0, limit).map((comment: any, index: number) => 
                            <div key={index} className="flex flex-col gap-2 mb-2 border p-2 w-full rounded-lg">
                                <p className="font-semibold mb-2">{comment.user.fullName}</p>
                                <p className="text-sm">{comment.body}</p>
                                <p className="text-sm">{comment.likes} Likes</p>
                            </div>
                            )}
                            {
                                comments && comments.length > limit && <Button color="bg-info" onClick={() => setLimit((prev) => prev + 3)}>Load more</Button>
                            }
                        </div>
                    </CardFooter>
                </Card></div>}
        </main>
    );
}