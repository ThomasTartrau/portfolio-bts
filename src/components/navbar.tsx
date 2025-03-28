"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { useScrollTo } from "@/lib/useScrollTo";
import { cn } from "@/lib/utils";
import { BookOpenIcon, BrainIcon, BriefcaseIcon, HomeIcon, SchoolIcon, TrafficConeIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const scrollTo = useScrollTo();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              {isHome ? (
                <button
                  onClick={() => scrollTo("hero")}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <HomeIcon className="size-4" />
                </button>
              ) : (
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <HomeIcon className="size-4" />
                </Link>
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>Accueil</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              {isHome ? (
                <button
                  onClick={() => scrollTo("about")}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <UserIcon className="size-4" />
                </button>
              ) : (
                <Link
                  href="/#about"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <UserIcon className="size-4" />
                </Link>
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>A propos</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              {isHome ? (
                <button
                  onClick={() => scrollTo("work")}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <BriefcaseIcon className="size-4" />
                </button>
              ) : (
                <Link
                  href="/#work"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <BriefcaseIcon className="size-4" />
                </Link>
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>Expériences professionnelles</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              {isHome ? (
                <button
                  onClick={() => scrollTo("education")}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <SchoolIcon className="size-4" />
                </button>
              ) : (
                <Link
                  href="/#education"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <SchoolIcon className="size-4" />
                </Link>
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>Formations</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              {isHome ? (
                <button
                  onClick={() => scrollTo("skills")}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <BrainIcon className="size-4" />
                </button>
              ) : (
                <Link
                  href="/#skills"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <BrainIcon className="size-4" />
                </Link>
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>Compétences</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              {isHome ? (
                <button
                  onClick={() => scrollTo("projects")}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <TrafficConeIcon className="size-4" />
                </button>
              ) : (
                <Link
                  href="/#projects"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <TrafficConeIcon className="size-4" />
                </Link>
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>Projets</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              {isHome ? (
                <button
                  onClick={() => scrollTo("projects")}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <TrafficConeIcon className="size-4" />
                </button>
              ) : (
                <Link
                  href="/blog"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <BookOpenIcon className="size-4" />
                </Link>
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>Veille Technologique</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <social.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
