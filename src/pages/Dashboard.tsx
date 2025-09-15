import { VeltComments, VeltInlineCommentsSection, VeltInlineReactionsSection } from "@veltdev/react";

export default function Dashboard() {
    return (
        <div >
            <VeltComments shadowDom={false} />
            <div className="flex items-center gap-4 p-8">
                <h1 className="text-black text-2xl font-bold">Velt - Notion like comments</h1>
            </div>

            <section id="article0" data-velt-target-inline-comment-element-id="article0"
                className="p-8 flex flex-col gap-6 max-w-[1000px]">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptatibus quod ex. Harum, corrupti
                    veniam? Architecto quos non animi rerum consequatur fuga excepturi numquam ipsam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vitae autem, non sunt repellat deleniti
                    ab at aliquid doloribus, voluptatem quam, cumque aut consequatur dolore nostrum culpa ratione!</p>
                <hr />
                <VeltInlineReactionsSection targetReactionElementId="article0" shadowDom={false}
                />
                <VeltInlineCommentsSection shadowDom={false} targetElementId="article0" />
            </section>
        </div>
    );
}
