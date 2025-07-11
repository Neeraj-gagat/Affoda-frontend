'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      navLayout='around'
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        // #7fe7c2
        // day_button:"text-[14px]",
        weekdays:'flex justify-between mx-3 text-[15px]',
        months: 'flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4',
        month: 'space-y-2 md:space-y-4',
        caption: 'flex justify-between items-center px-2',
        month_caption: 'text-[14px] font-[500] items-center flex justify-center',
        nav: 'flex items-center space-x-1',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-8 w-8 bg-transparent text-green-900 p-0 opacity-50 hover:opacity-100'
        ),
        button_previous: 'absolute left-2 top-3 bg-gray-200 rounded-md hover:bg-accent transition duration-200',
        button_next: 'absolute right-2 top-3 bg-gray-200 rounded-md hover:bg-accent transition duration-200',
        table: 'w-full border-collapse',
        head_row: 'flex',
        head_cell: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'text-center p-1',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'w-9 h-9 p-0 text-[14px] font-[400] aria-selected:opacity-100'
        ),
        selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
        today: 'bg-accent text-accent-foreground',
        outside:
          'text-muted-foreground opacity-50 aria-selected:bg-accent/50',
        disabled: 'text-muted-foreground opacity-50',
        range_middle:
          'aria-selected:bg-accent  aria-selected:text-accent-foreground',
        caption_label:"uppercase",
        range_start:"rounded-sm bg-black",
        range_end: 'rounded-sm',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}

Calendar.displayName = 'Calendar'

export { Calendar }
