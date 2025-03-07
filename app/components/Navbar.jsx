"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/10 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative size-24">
              <Image
                src="/logo1.png"
                alt="Logo"
                priority
                unoptimized
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <span className="hidden font-playfair text-xl font-bold text-primary sm:inline-block">
              Vaishya Sabha
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link
            href="/members"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Members
          </Link>
          <Link
            href="/events"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Events
          </Link>
          <Link
            href="/subscriptions"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Subscriptions
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log in
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm" className="hidden md:flex">
              Register
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn("container md:hidden", isMenuOpen ? "block" : "hidden")}
      >
        <nav className="flex flex-col space-y-4 pb-6">
          <Link
            href="/members"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Members
          </Link>
          <Link
            href="/events"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/subscriptions"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Subscriptions
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex flex-col gap-2 pt-2">
            <Link href="/login">
              <Button variant="outline" className="w-full">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button className="w-full">Register</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
