let daftarPemain = document.getElementById("daftar-pemain");
let counter = 1;

function ValidateEmail(mail){
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
    return true;
  }
  return false;
}

function tambah(){
  let kode = "";
  let nama = "";
  let email = "";
  let posisi = "";
  let isValid = false;

  let konfirmasi = window.confirm("Apakah yakin akan menambahkan data?");

  if(konfirmasi == true){
    // Masukkan Kode Pemain
    while(isValid == false){
      kode = window.prompt("Masukkan kode pemain!");

      if (kode || kode == ""){
        if(kode == ""){
          window.alert("Tidak boleh kosong!");
        }else if(kode.length > 11){
          window.alert("Kode lebih dari 11 digit!");
        }else{
          isValid = true;
        }
      }else if(kode == null){
        return;
      }
    }
    isValid = false;

    // Masukkan Nama Pemain
    while(isValid == false){
      nama = window.prompt("Masukkan nama pemain!");

      if (nama || nama == ""){
        if(nama.length > 25){
          isValid = false;
          window.alert("Nama lebih dari 25 karakter!");
        }else if(nama == ""){
          window.alert("Tidak boleh kosong!");
        }else{
          isValid = true;
        }
      }else if(nama == null){
        return;
      }
    }
    isValid = false;

    // Masukkan Email Pemain
    while(isValid == false){
      email = window.prompt("Masukkan email pemain!");

      if (email || email == ""){
        if(email == ""){
          window.alert("Tidak boleh kosong!");
        }
        else if(ValidateEmail(email) == false){
          window.alert("Kamu memasukkan email yang tidak valid!");
        }
        else if(email.length > 25){
          window.alert("Email lebih dari 25 karakter!");
        }else{
          isValid = true;
        }
      }else if(email == null){
        return;
      }

    }
    isValid = false;

    // Masukkan Posisi Pemain
    while(isValid == false){
      posisi = window.prompt("Masukkan posisi pemain! (Mid, Top, ADC, Support, Jungle, Substitute)");

      if (posisi || posisi == ""){
        if(posisi == ""){
          window.alert("Tidak boleh kosong!");
        }
        else if(posisi != "Mid" && posisi != "Top" && posisi != "ADC" && posisi != "Support" && posisi != "Jungle" && posisi != "Substitute"){
          window.alert("Posisi tidak ada di pilihan!");
        }
        else{
          isValid = true;
        }
      }else if(posisi == null){
        return;
      }
    }
  } // Last of if(konfirmasi)

  let tambah = `
    <tr id="baris${counter}">
      <td id="kd_pemain${counter}">
        ${kode}
        <button id="edit-kode${counter}" class="${counter} edit-btn" onclick="edit(this.getAttribute('id'), this.getAttribute('class'))">
          Edit
        </button>
      </td>
      <td id="nama_pemain${counter}">
        ${nama}
        <button id="edit-nama${counter}" class="${counter} edit-btn" onclick="edit(this.getAttribute('id'), this.getAttribute('class'))">
          Edit
        </button>
      </td>
      <td id="email_pemain${counter}">
        ${email}
        <button id="edit-email${counter}" class="${counter} edit-btn" onclick="edit(this.getAttribute('id'), this.getAttribute('class'))">
          Edit
        </button>
      </td>
      <td id="posisi_pemain${counter}">
        ${posisi}
        <button id="edit-posisi${counter}" class="${counter} edit-btn" onclick="edit(this.getAttribute('id'), this.getAttribute('class'))">
          Edit
        </button>
      </td>
      <td class="btn">
        <button id="hapus-btn" class="${counter}" onclick="hapus(this.getAttribute('class'))">Hapus</button>
      </td>
    </tr>
  `;

  counter++;

  daftarPemain.innerHTML += tambah;
}

function hapus(namaClass){
  let konfirmasi = window.confirm("Apakah yakin untuk menghapus data pemain ini?");

  if(konfirmasi == true){
    let barisDihapus = document.getElementById(`baris${namaClass}`);
    barisDihapus.remove();
  }
}

function edit(selector1, selector2){
  let cell = document.getElementById(selector1).parentNode;
  let konfirmasi = window.confirm("Apakah yakin untuk mengedit data pemain ini?");
  if(konfirmasi == true){
    let input = window.prompt("Diubah menjadi :");
    let kalimat = `
    <td id="${cell}">
      ${input}
      <button id="edit-btn${selector2}" class="${selector2} edit-btn" onclick="edit(this.getAttribute('id'), this.getAttribute('class'))">
        Edit
      </button>
    </td>
    `;

    cell.innerHTML = kalimat;
  }
}
