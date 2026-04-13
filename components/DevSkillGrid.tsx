"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { backend, frontend, tools } from "@/constants/skill";
import { Skill } from "@/types/types";
import Text3DFlip from "./ui/text-3d-flip";

function SkillCard({ skill }: { skill: Skill }) {
    return (
        <Card className="bg-transparent border-gray-800 rounded-lg hover:border-gray-600 transition-colors group">
            <CardContent className="flex flex-col items-center justify-center p-4 sm:p-8">
                <div className="mb-4 text-gray-300 group-hover:text-white transition-colors bg-gray-400/10 p-4 rounded-md">
                    {skill.icon}
                </div>
                <p className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-400 group-hover:text-white uppercase">
                    {skill.name}
                </p>
            </CardContent>
        </Card>
    );
}
export default function DevSkillGrid() {
    return (
        <div className="py-20 px-6 sm:px-5 text-center">
            <div className="flex flex-col items-center space-y-3 mb-10">
                <p className="text-base sm:text-lg md:text-xl font-medium text-zinc-400 tracking-[0.2em] capitalize">
                    <span className="text-purple-400">{">"}</span> Technologies I work with
                </p>
                <Text3DFlip
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white"
                    textClassName="text-purple-500"
                    flipTextClassName="text-purple-500"
                    rotateDirection="top"
                    staggerDuration={0.03}
                    staggerFrom="first"
                    transition={{ type: "spring", damping: 25, stiffness: 160 }}
                >
                    Skills & Tools
                </Text3DFlip>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 capitalize max-w-lg">
                    A collection of technologies and tools I use to build modern web applications
                </p>
            </div>
            <Tabs defaultValue="tools" className="w-full flex flex-col items-center">
                <TabsList className="bg-transparent border border-gray-800 p-1.5 rounded-xl gap-2 mb-12 w-full max-w-sm sm:max-w-xl">
                    <TabsTrigger
                        value="frontend"
                        className="text-gray-400 data-[state=active]:bg-gray-800 data-[state=active]:text-white rounded-lg px-4 sm:px-12 py-3 text-sm font-semibold tracking-wide transition-all min-w-22.5 sm:min-w-35 cursor-pointer"
                    >
                        Frontend
                    </TabsTrigger>
                    <TabsTrigger
                        value="backend"
                        className="text-gray-400 data-[state=active]:bg-gray-800 data-[state=active]:text-white rounded-lg px-4 sm:px-12 py-3 text-sm font-semibold tracking-wide transition-all min-w-22.5 sm:min-w-35 cursor-pointer"
                    >
                        Backend
                    </TabsTrigger>
                    <TabsTrigger
                        value="tools"
                        className="text-gray-400 data-[state=active]:bg-gray-800 data-[state=active]:text-white rounded-lg px-4 sm:px-12 py-3 text-sm font-semibold tracking-wide transition-all min-w-22.5 sm:min-w-35 cursor-pointer"
                    >
                        Tools
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="frontend" className="w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 select-none">
                        {frontend.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="backend" className="w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 select-none">
                        {backend.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="tools" className="w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 select-none">
                        {tools.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
