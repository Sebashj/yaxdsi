const e1=()=>{
    Swal.fire('no pues no')
}
const e2=()=>{
Swal.fire({
    icon: 'error',
    title: 'Error );',
    text: 'Frase en ingles mala!'
})
  }
  const e3=()=>{
  Swal.fire({
    title: '<strong>HTML <u>Salio mal</u></strong>',
    icon: 'info',
    html:
      'No jalo, ',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })
}
const e4=()=>{
    Swal.fire({
        title: '*video de una explocion muy grande que hace ¡PUM!*',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}
const e5=()=>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Quierres descargar eso?',
        text: "Es dudosamente inmoral xd!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, quien tenga miedo a morrir que no nazca',
        cancelButtonText: 'No, me equiboque, borrar face',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Hecho!',
            'Ya tienes 3 trollanos',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Se cancelo',
            'Estas seguro :) oeso creo...',
            'error'
          )
        }
      })
}