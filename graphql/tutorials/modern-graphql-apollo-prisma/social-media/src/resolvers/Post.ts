import { Context } from "../index";

interface PostParentType {
    authorId: number
}

export const Post = {
    user: (parent: PostParentType, __: any, { userInfo, prisma }: Context) => {
        return prisma.user.findUnique({
            where: {
                id: parent.authorId
            }
        })
    }
}
