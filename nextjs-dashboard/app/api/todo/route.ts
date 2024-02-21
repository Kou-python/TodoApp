// get,post,patch,deleteの処理を記述
import { PrismaClient, Todo } from '@prisma/client';

const prisma = new PrismaClient();

// 取得
export async function GET() {
  // todoテーブルから全件取得
  const todos: Todo[] = await prisma.todo.findMany();
  return Response.json(todos);
}

// 追加
export async function POST(request: Request) {
  const { title }: { title: string } = await request.json();
  // todoテーブルに追加
  const response = await prisma.todo.create({
    data: {
      title,
    },
  });
  return Response.json(response);
}

// 更新
import { NextRequest } from 'next/server';


export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = Number(params.id);
  const { completed }: { completed: boolean } = await request.json();
  // リクエストのidを元にcompletedを反転させる
  const response = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      completed: !completed,
    },
  });
  return Response.json(response);
}

// 削除
export async function DELETE({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  // リクエストのidを元に削除
  const response = await prisma.todo.delete({
    where: {
      id,
    },
  });
  return Response.json(response);
}
