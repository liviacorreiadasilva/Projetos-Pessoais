<?php
class Cep
{
    private $data = [];

    public function __construct($cep)
    {
        $content = @file_get_contents("https://cep.awesomeapi.com.br/json/$cep");

        if ($content !== false) {
            $obj_json = json_decode($content);
            if ($obj_json !== null) {
                $this->data = $obj_json;
            } else {
                throw new Exception("Erro ao decodificar o JSON retornado");
            }
        } else {
            throw new Exception("CEP [$cep] não localizado");
        }
    }

    public function getData()
    {
        return $this->data;
    }
}

try {
    # Verificando se o CEP foi passado via POST
    if(isset($_POST['cep'])) {
        # Criando uma instância do objeto CEP e informando um CEP para consulta
        $cep = new Cep($_POST['cep']);

        $t_cep1 = substr($cep->getData()->cep, 0, 5);
        $t_cep2 = substr($cep->getData()->cep, 5, 3);

        print($cep->getData()->address_type . PHP_EOL);
        print($cep->getData()->address_name . PHP_EOL);
        print($cep->getData()->address . PHP_EOL);
        print($cep->getData()->city . PHP_EOL);
        print($cep->getData()->state . PHP_EOL);
        print($cep->getData()->district . PHP_EOL);
    } else {
        echo "CEP não informado";
    }
} catch(Exception $e) {
    echo $e->getMessage();
}
?>
