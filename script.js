function validateForm() {
    if (document.forms["formVaksinasi"]["nama"].value == "") {
        Swal.fire({
            text: 'Nama Tidak Boleh Kosong',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["formVaksinasi"]["nama"].focus();
        return false;
    } else if (document.forms["formVaksinasi"]["nrp"].value == "") {
        Swal.fire({
            text: 'NRP Tidak Boleh Kosong',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["formVaksinasi"]["nrp"].focus();
        return false;
    } else if (document.forms["formVaksinasi"]["email"].value == "") {
        Swal.fire({
            text: 'Email Tidak Boleh Kosong',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["formVaksinasi"]["email"].focus();
        return false;
    } else if (document.forms["formVaksinasi"]["jenisKelamin"].value < 1) {
        Swal.fire({
            text: 'Jenis Kelamin Tidak Boleh Kosong',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["formVaksinasi"]["jenisKelamin"].focus();
        return false;
    } else if (document.forms["formVaksinasi"]["jurusan"].selectedIndex < 1) {
        Swal.fire({
            text: 'Silakan Memilih Jurusan',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["formVaksinasi"]["jurusan"].focus();
        return false;
    } else if (document.forms["formVaksinasi"]["alamat"].value == "") {
        Swal.fire({
            text: 'Silakan Lengkapi Alamat',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["formVaksinasi"]["alamat"].focus();
        return false;
    } else if (document.forms["formVaksinasi"]["ket-vaksin"].selectedIndex < 1) {
        Swal.fire({
            text: 'Silakan Memilih Status Vaksinasi',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        });
        document.forms["formVaksinasi"]["ket-vaksin"].focus();
        return false;
    } else if (document.forms["formVaksinasi"]["ket-vaksin"].value == "1") {
        if (document.forms["formVaksinasi"]["jenis-vaksin"].selectedIndex < 1) {
            Swal.fire({
                text: 'Silakan Memilih Jenis Vaksin',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
            });
            document.forms["formVaksinasi"]["jenis-vaksin"].focus();
            return false;
        }
        if (document.forms["formVaksinasi"]["dosis"].value == "") {
            Swal.fire({
                text: 'Silakan Lengkapi Dosis Vaksinasi',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
            });
            document.forms["formVaksinasi"]["dosis"].focus();
            return false;
        }
        if (document.forms["formVaksinasi"]["no-sertif"].value == "") {
            Swal.fire({
                text: 'Silakan Lengkapi Nomor Sertifikat Vaksinasi',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
            });
            document.forms["formVaksinasi"]["no-sertif"].focus();
            return false;
        }
        if (document.forms["formVaksinasi"]["tgl-vaksin"].value == "") {
            Swal.fire({
                text: 'Silakan Lengkapi Tanggal Vaksinasi',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
            });
            document.forms["formVaksinasi"]["tgl-vaksin"].focus();
            return false;
        }
    } else if (document.forms["forVaksinasi"]["ket-vaksin"].value == "2") {
        if (document.forms["formVaksinasi"]["alasan-vaksin"].selectedIndex < 1) {
            Swal.fire({
                text: 'Silakan Memilih Alasan Belum Vaksinasi',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
            });
            document.forms["formVaksinasi"]["alasan-vaksin"].focus();
            return false;
        } else if (document.forms["formVaksinasi"]["alasan-vaksin"].value == "6") {
            if (document.forms["formVaksinasi"]["alasan-lain"].value == "") {
                Swal.fire({
                    text: 'Silakan Isi Alasan Belum Vaksinasi',
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                });
                document.forms["formVaksinasi"]["alasan-lain"].focus();
                return false;
            }
        }
    }

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, submit it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Succes!',
                text: 'Your data has been submitted.',
                icon: 'success',
                confirmButtonColor: '#3085d6'
            });
            document.forms["formVaksinasi"].reset();
            document.getElementById('sudah-vaksin').style.display = 'none';
            document.getElementById('belum-vaksin').style.display = 'none';
        }
    });
    return false;
}

function isVaksin() {
    if (document.forms["formVaksinasi"]["ket-vaksin"].value == "0") {
        document.getElementById('sudah-vaksin').style.display = 'none';
        document.getElementById('belum-vaksin').style.display = 'none';
    } else if (document.forms["formVaksinasi"]["ket-vaksin"].value == "1") {
        document.getElementById('sudah-vaksin').style.display = 'block';
        document.getElementById('belum-vaksin').style.display = 'none';
    } else if (document.forms["formVaksinasi"]["ket-vaksin"].value == "2") {
        document.getElementById('sudah-vaksin').style.display = 'none';
        document.getElementById('belum-vaksin').style.display = 'block';
    }
}