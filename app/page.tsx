'use client'

import { Card, CardBody, CardFooter, CardHeader } from "@/components/Card";
import { getPosts } from "@/actions/post";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import Spinner from "@/components/Spinner";

type OptionsProps = {
  total: number,
  perPage: number,
  page: number
}

interface IPosts {
  id: number
  title: string,
  body: string}

export default function Home() {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<OptionsProps>({
    total: 0,
    perPage: 6,
    page: 1
  });

  const fetchPosts = async (currentOptions: OptionsProps) => {
    setIsLoading(true);
    const params: Record<string, string> = {
      limit: currentOptions.perPage.toString(),
      skip: (currentOptions.perPage * currentOptions.page - currentOptions.perPage).toString()
    }
    return getPosts(new URLSearchParams(params)).then(res => {
      console.log(res);
      setPosts(res.posts);
      setOptions({
        ...options,
        total: res.total,
      });
    })
    .catch(() => setPosts([]))
    .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchPosts(options);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.page])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 lg:px-36 xl:px-48 2xl:px-56 px-10">
      {
        isLoading ? <Spinner /> :
        <div className="w-full">
        {
          !isLoading && posts.map((post, index) => 
          <div key={index} className="mb-4">
            <Card>
            <Link href={`/posts/${post.id}`}>
              <CardHeader>{post.title}</CardHeader>
            </Link>
            <CardBody>{post.body.length > 50 ? `${post.body.slice(0, 200)}...` : post.body}</CardBody>
            </Card>
          </div>
          )
        }
        {
          !isLoading && posts && posts.length > 0 &&  <Pagination options={options} setOptions={setOptions} />
        }
      </div>
      }
    </main>
  );
}
