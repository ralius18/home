export class Job {
  title: string
  company: string
  dates: string[]
  description: string

  constructor ( title: string, company: string, dates: string[], description: string ) {
    this.title = title
    this.company = company
    this.dates = dates
    this.description = description
  }
}
