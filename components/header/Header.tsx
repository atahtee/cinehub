import Image from 'next/image'
import Container from '../Container'
import Link from 'next/link'
import {
  CalendarDays,
  ChevronDown,
  Menu,
  PartyPopper,
  Play,
  SearchIcon,
  Sun,
  TrendingUp,
  Tv,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/DropDown'
import MobileHeader from './MobileMenu'
import ThemeSwitcher from './ThemeSwitcher'

function Header() {
  return (
    <header className='sticky top-0 shadow-sm bg-background/80 backdrop-blur-sm md:static'>
      <Container>
        <nav className='flex items-center justify-between py-4'>
          <div className='flex items-center gap-8'>
            <Link
              className='flex items-center text-2xl font-bold'
              href='/movie'
            >
              <span>Cinehub</span>

            </Link>
            <div className='items-center hidden gap-4 md:flex'>
              <div className='flex items-center gap-1'>
                <p>Movies</p>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <ChevronDown size={20} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='min-w-[10rem]'>
                    <DropdownMenuItem asChild className='text-base'>
                      <Link
                        className='flex items-center gap-3'
                        href={`/movie?category=popular`}
                      >
                        <PartyPopper size={19} />
                        <span>Popular</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className='text-base'>
                      <Link
                        className='flex items-center gap-3'
                        href={`/movie?category=now_playing`}
                      >
                        <Play size={19} />
                        <span>Now Playing</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className='text-base'>
                      <Link
                        className='flex items-center gap-3'
                        href={`/movie?category=upcoming`}
                      >
                        <CalendarDays size={19} />
                        <span>Upcoming</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className='text-base'>
                      <Link
                        className='flex items-center gap-3'
                        href={`/movie?category=top_rated`}
                      >
                        <TrendingUp size={19} />
                        <span>Top Rated</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className='flex items-center gap-1'>
                <p>TV Shows</p>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <ChevronDown size={20} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='min-w-[10rem]'>
                    <DropdownMenuItem asChild className='text-base'>
                      <Link
                        className='flex items-center gap-3'
                        href={`/tv?category=popular`}
                      >
                        <PartyPopper size={19} />
                        <span>Popular</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className='text-base'>
                      <Link
                        className='flex items-center gap-3'
                        href={`/tv?category=airing_today`}
                      >
                        <Play size={19} />
                        <span>Airing Today</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className='text-base'>
                      <Link
                        className='flex items-center gap-3'
                        href={`/tv?category=on_the_air`}
                      >
                        <Tv size={19} />
                        <span>On TV</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className='text-base'>
                      <Link
                        className='flex items-center gap-3'
                        href={`/tv?category=top_rated`}
                      >
                        <TrendingUp size={19} />
                        <span>Top Rated</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className='hidden gap-6 md:flex md:items-center'>
            <ThemeSwitcher />
            <Link href='/search'>
              {/* <input
              type='text'
              placeholder='Search a Movie or TV'
              className='px-2 py-1 bg-transparent outline-none placeholder:text-gray-500 placeholder:text-sm'
            /> */}
              <SearchIcon
                className='duration-150 cursor-pointer hover:text-accent'
                size={22}
              />
            </Link>
          </div>

          <MobileHeader>
            <div className='md:hidden'>
              <Menu />
            </div>
          </MobileHeader>
        </nav>
      </Container>
    </header>
  )
}

export default Header
