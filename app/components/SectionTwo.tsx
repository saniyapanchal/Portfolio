import Image from "next/image";
import blue from '../../public/blue.jpg'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import ai from '../../public/tech-icons/ai.svg';
import canva from '../../public/tech-icons/canva.svg';
import chatgpt from '../../public/tech-icons/chatgpt.svg';
import chrome from '../../public/tech-icons/chrome.svg';
import discord from '../../public/tech-icons/discord.svg';
import figma from '../../public/tech-icons/figma.svg';
import github from '../../public/tech-icons/github.svg';
import micro from '../../public/tech-icons/micro.svg';
import notion from '../../public/tech-icons/notion.svg';
import sketch from '../../public/tech-icons/sketch.svg';
import youtube from '../../public/tech-icons/youtube.svg';

import twitter from '../../public/twitter.svg';
import insta from '../../public/insta.svg';
import linkedin from '../../public/linkedin.svg';
import { Button } from "@/components/ui/button";

const icons = [
    sketch, canva, ai, figma, chatgpt, github, discord, youtube, chrome, notion, micro
]

const socialMedia = [
    {
        id: 1,
        icon: insta,
        name: "Instagram",
        username: "@saniya",
        link: "http://localhost:3000/"
    },
    {
        id: 2,
        icon: twitter,
        name: "Twitter",
        username: "@saniya",
        link: "http://localhost:3000/"
    },
    {
        id: 3,
        icon: linkedin,
        name: "LinkedIn",
        username: "@saniya",
        link: "http://localhost:3000/"
    },
]

export function SectionTWo() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
            <div className="w-full relative col-span-1">
                <Image src={blue} alt="radhakrishna" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
                <Card className="bg-gray-100 border-none">
                    <CardHeader>
                        <CardTitle>Explore my stack</CardTitle>
                        <CardDescription>Check out the tools I use daily</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                        {icons.map((item, index) => (
                            <Image key={index} src={item} alt="Icon" className="w-16 h-16" />
                        ))}
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
                    {socialMedia.map((item) => (
                        <Card key={item.id}  className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none">
                            <Image src={item.icon} alt="Icon" className="w-16 h-16"/>
                            <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
                            <p className="to-muted-foreground">{item.username}</p>
                            <Button className="mt-4" size="sm" asChild>
                                <a href={item.link}>Follow</a>
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}