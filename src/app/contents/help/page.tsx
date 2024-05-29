import Page from "@/components/layout/page";
import Box from "@/components/elements/card/box";
import BoxHeader from "@/components/elements/card/boxHeader";
import ListItem from "@/components/elements/list/listItem";
import Help from "@/components/helps/help";
import ArrowLeft from "@/components/svgs/arrow-left";
import ContentHelp from "@/components/helps/contentHelp";

export default function HelpContentPage() {
    return <>
        <Page
            className="bg-cover p-10 min-h-screen"
        >
            <div className="flex w-full space-x-4 space-x-reverse bg-white">
                <Box className="w-full md:w-4/5 space-y-7 p-8 py-4">
                    <div
                        className="flex justify-end text-sm font-light text-onSecondary/80 divide-x divide-x-reverse divide-onSecondary/50 from-secondary/10 to-white bg-gradient-to-r py-2 px-4">
                        <div className="px-2">
                            <span>
                                شماره خبر:
                            </span>
                            <span>
                                58
                            </span>
                        </div>
                        <div className="px-2">
                            پنج شنبه ۱۰ اسفند ۱۴۰۲
                        </div>
                        <div className="px-2">
                            <span>
                                دسته بندی:
                            </span>
                            <span>
                                اخبار
                            </span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex space-x-2 space-x-reverse items-center">
                            <ArrowLeft
                                className="size-3 text-primary"
                            />
                            <h1 className="text-lg font-medium">
                                جهادگران در راه سیستان
                            </h1>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
                                className="float-end mx-4 w-1/2 h-52 object-cover rounded-2xl"
                            />
                            <p className="font-light text-base">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                                است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                فعلی
                                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                                زیادی
                                در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                                افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                                زبان
                                فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
                                و
                                شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                                سوالات
                                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با
                                تولید
                                سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                                روزنامه و
                                مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
                                متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                                آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                                طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                                صورت
                                می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
                                رسد و
                                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                                طراحی
                                اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                                و با
                                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                                لازم
                                است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                                کاربردی
                                می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان
                                را
                                می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
                                خلاقی، و
                                فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                                موجود در
                                ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                                اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم
                                ایپسوم
                                متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                                چاپگرها و
                                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                                مورد
                                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                                درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
                                بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                                ایجاد
                                کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت
                                تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                                پیوسته
                                اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <ContentHelp/>
                        </div>
                    </div>
                    <div
                        className="flex justify-start text-sm font-light text-onSecondary/80 divide-x divide-x-reverse divide-onSecondary/50 from-secondary/10 to-white bg-gradient-to-l py-2 px-4">
                        <div className="px-2 flex">
                            <span>
                                کلمات کلیدی:
                            </span>
                            <div className="flex divide-x divide-x-reverse divide-onSecondary/50 font-medium">
                                <p className="px-1">
                                    #سیستان
                                </p>
                                <p className="px-1">
                                    #جهادگران
                                </p>
                            </div>
                        </div>
                    </div>
                </Box>
                <div className="w-1/5">
                    <Box className="">
                        <BoxHeader>
                            <span className="text-onSecondary font-semibold">
                                مطالب مربوط
                            </span>
                        </BoxHeader>
                        <ul className="divide-y">
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                    <ListItem key={item}>
                                        <span className="text-base font-light line-clamp-2">
                                            تست
                                        </span>
                                    </ListItem>
                                ))
                            }
                        </ul>
                    </Box>
                </div>
            </div>
        </Page>
    </>
}