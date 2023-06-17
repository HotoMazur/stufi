package Utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DbUtils {
    public static Connection connectToDb() {
        final String url = "jdbc:postgresql://db.uuyzbdddimkofoswqboo.supabase.co:5432/postgres";
        final String user = "postgres";
        final String password = "difwuf-0cIpzy-dyrseh";
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to the PostgreSQL server successfully.");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }

        return conn;
    }



    public static void disconnect(Connection connection, PreparedStatement preparedStatement) {
        try {
            if (connection != null && preparedStatement != null) {
                connection.close();
                preparedStatement.close();
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
}
