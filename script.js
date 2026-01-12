let data = JSON.parse(localStorage.getItem("keuanganRT")) || [];

const form = document.getElementById("formKeuangan");
const tabel = document.getElementById("tabelData");
const saldoText = document.getElementById("saldo");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const item = {
        tanggal: tanggal.value,
        jenis: jenis.value,
        jumlah: parseInt(jumlah.value),
        keterangan: keterangan.value
    };

    data.push(item);
    localStorage.setItem("keuanganRT", JSON.stringify(data));

    form.reset();
    tampilkanData();
});

function tampilkanData() {
    tabel.innerHTML = "";
    let saldo = 0;

    data.forEach(d => {
        saldo += d.jenis === "masuk" ? d.jumlah : -d.jumlah;

        tabel.innerHTML += `
            <tr>
                <td>${d.tanggal}</td>
                <td>${d.jenis}</td>
                <td>Rp ${d.jumlah.toLocaleString()}</td>
                <td>${d.keterangan}</td>
            </tr>
        `;
    });

    saldoText.innerText = `Saldo: Rp ${saldo.toLocaleString()}`;
}

tampilkanData();
function simpanKeGoogle() {
    const data = {
        tanggal: document.getElementById("tanggal").value,
        jenis: document.getElementById("jenis").value,
        jumlah: document.getElementById("jumlah").value,
        keterangan: document.getElementById("keterangan").value
    };

    fetch("URL_WEB_APP_GOOGLE_SCRIPT", {
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

