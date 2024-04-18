export class Job {
  detailsVisible: boolean
  title: string
  company: string
  dates: string[]
  duration: string
  website: string
  companyDescription: string
  description: string

  constructor(detailsVisible: boolean, title: string, company: string, dates: string[], duration: string, website: string, companyDescription: string, description: string ) {
    this.detailsVisible = detailsVisible
    this.title = title
    this.company = company
    this.dates = dates
    this.duration = duration
    this.website = website
    this.companyDescription = companyDescription
    this.description = description
  }
}
