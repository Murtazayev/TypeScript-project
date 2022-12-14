// this will be the instruction to every other class on how they can be an argument to addMarker
interface Mappable {
  location: {
    lat: number
    lng: number
  }
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divID) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      },
    )
  }

  addUserMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    })
  }

  // baaad!!
  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   })
  // }
}
