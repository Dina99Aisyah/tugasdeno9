interface ISql {
    [index :string] : string;
}

const TSql = {} as ISql;
TSql ['KtgFindAll'] = "select*from tabel_kategori;";
TSql ['KtgFindByKode'] = "select*from tabel_kategori where kode = $1;";
TSql ['KtgFindInKode'] = "select*from tabel_kategori where kode in ($1,$2,$3);";
TSql ['BlogInfoFindAll'] = "select*from tabel_info;";
TSql ['InsUser'] = "insert into tabel_user (username,fullname,passwd) values ($1,$2,MD5($3));";
export default TSql;