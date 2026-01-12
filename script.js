function simpanKeGoogle() {
    const data = {
        tanggal: document.getElementById("tanggal").value,
        jenis: document.getElementById("jenis").value,
        jumlah: document.getElementById("jumlah").value,
        keterangan: document.getElementById("keterangan").value
    };

    fetch("https://script.google.com/macros/s/AKfycbwwDDgdgpD2OUw4pswgE-rfoxW_o6VrhIFjwMWTkaIyaV_jlXvYxT8u-zkpgVfJrOXS/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => {
        alert("Data berhasil disimpan ke Google Spreadsheet");
    })
    .catch(err => {
        alert("Gagal menyimpan data");
        console.error(err);
    });
}


